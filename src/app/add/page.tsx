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

const formSchema = z
  .object({
    artikel: z.string({
      required_error: 'Artikel is required.',
    }),
    word_german: z.string({
      required_error: 'Word is required.',
    }),
    word_german_plural: z.string({
      required_error: 'Word is required.',
    }),
    meaning_english: z.string({
      required_error: 'English meaning is required.',
    }),
    meaning_turkish: z.string({
      required_error: 'Turkish meaning is required.',
    }),
  })
  .partial({
    word_german_plural: true,
  })

function Add() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      artikel: '',
      word_german: '',
      word_german_plural: '',
      meaning_english: '',
      meaning_turkish: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default Add
