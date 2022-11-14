import React from 'react';
import { useForm } from '@formcarry/react';
 
function MyFormcarry() {
  // Call the "useForm" hook in your function component
  const {state, submit} = useForm({
    id: 'Dg67n7vay'
  });
 
  // Success message
  if (state.submitted) {
    return <div>Thank you! We received your submission.</div>;
  }
 
  return (
    <form onSubmit={submit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email"/>

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message"/>

      <button type="submit">Send</button>
    </form>
  );
}