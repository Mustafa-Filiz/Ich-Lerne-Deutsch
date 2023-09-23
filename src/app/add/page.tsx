'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/lib/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/lib/ui/form'
import { Input } from '@/lib/ui/input'
import { useForm } from 'react-hook-form'
import { Levels } from '@/utils/enums'
import BasicSelect from '@/components/BasicSelect'

const formSchema = z
  .object({
    artikel: z.string().regex(/(der|die|das)/, 'Must be a valid Artikel.'),
    word_german: z.string().min(2, {
      message: 'Word is required.',
    }),
    word_german_plural: z.string().min(2, {
      message: 'Word plural form is required.',
    }),
    meaning_english: z.string().min(2, {
      message: 'English meaning is required.',
    }),
    meaning_turkish: z.string().min(2, {
      message: 'Turkish meaning is required.',
    }),
    level: z.nativeEnum(Levels, {
      required_error: 'Level is required.',
    }),
    section: z.string({
      required_error: 'Section is required.',
    }),
  })
  .required()

function Add() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      artikel: '',
      word_german: '',
      word_german_plural: '',
      meaning_english: '',
      meaning_turkish: '',
      level: Levels.a1,
      section: '1',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-screen-md m-auto p-16"
      >
        <FormField
          control={form.control}
          name="artikel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Artikel</FormLabel>
              <FormControl>
                <Input placeholder="Der, Die or Das" {...field} />
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="word_german"
          render={({ field }) => (
            <FormItem>
              <FormLabel>German Word</FormLabel>
              <FormControl>
                <Input placeholder="Tür, Fenster ..." {...field} />
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="word_german_plural"
          render={({ field }) => (
            <FormItem>
              <FormLabel>German Word Plural Form</FormLabel>
              <FormControl>
                <Input placeholder="Türen, Fenster ..." {...field} />
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="meaning_english"
          render={({ field }) => (
            <FormItem>
              <FormLabel>English Meaning</FormLabel>
              <FormControl>
                <Input placeholder="Door, Window ..." {...field} />
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="meaning_turkish"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Turkish Meaning</FormLabel>
              <FormControl>
                <Input placeholder="Kapi, Pencere ..." {...field} />
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between items-center gap-4">
          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Level</FormLabel>
                <FormControl>
                  <BasicSelect
                    name="level"
                    value={field.value}
                    onChange={field.onChange}
                    defaultValue={field.value}
                    options={Object.entries(Levels).map(([_, value]) => ({
                      value: value,
                      label: value,
                    }))}
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="section"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Section</FormLabel>
                <FormControl>
                  <BasicSelect
                    name="section"
                    value={field.value}
                    onChange={field.onChange}
                    defaultValue={field.value}
                    options={Array.from({ length: 14 }, (_, i) => i + 1).map(
                      (i) => ({
                        value: String(i),
                        label: String(i),
                      })
                    )}
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div id="button-group" className="flex items-center gap-4">
          <Button type="submit">Submit</Button>
          <Button variant="outline" onClick={() => form.reset()}>
            Clear
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default Add
