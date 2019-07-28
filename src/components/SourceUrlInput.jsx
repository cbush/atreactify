import React from "react";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton
} from "reakit";
import validUrl from "valid-url";
import { useLiveRef } from "../useLiveRef";

export const SourceUrlInput = props => {
  const propsRef = useLiveRef(props);
  const form = useFormState({
    onSubmit: ({ sourceUrl }) => {
      if (!validUrl.isWebUri(sourceUrl)) {
        const error = { sourceUrl: "Invalid URL" };
        throw error;
      }
      const { setSourceUrl } = propsRef.current;
      setSourceUrl(sourceUrl);
    }
  });
  return (
    <Form {...form}>
      <FormLabel {...form} name="sourceUrl">
        Source Image URL
      </FormLabel>
      <FormInput
        {...form}
        name="sourceUrl"
        placeholder={"https://example.com/myimage.jpg"}
      />
      <FormMessage {...form} name="sourceUrl" />
      <FormSubmitButton {...form}>Create Emoji</FormSubmitButton>
    </Form>
  );
};
