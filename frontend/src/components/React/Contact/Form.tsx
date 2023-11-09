import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Form = () => {
  const { register, handleSubmit } = useForm();

  const handleSubmitForm = async (formData: any, e: any) => {
    // e?.preventDefault()
    console.log(formData);
    console.log("送信");
    console.log(e)
    
    const element = new FormData()
    element.set('your-name', formData['your-name']);
    element.set('your-email', formData['your-email']);
    element.set('your-subject', formData['your-subject']);
    element.set('your-message', formData['your-message']);


    const res = await fetch(`${import.meta.env.PUBLIC_CONTACT_API_URL}`, {
      method: "post",
      body: element,
    });

    console.log(res);

    if (!res.ok) {
      console.log("error");
      return [];
    }

    const { data } = await res.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div>
        <p>お名前</p>
        <input
          type="text"
          style={{ width: "100%", borderRadius: "5px", padding: "5px 3px" }}
          {...register("your-name")}
        />
      </div>
      <div>
        <p>お名前（カナ）</p>
        <input
          type="text"
          style={{ width: "100%", borderRadius: "5px", padding: "5px 3px" }}
          {...register("your-email")}
        />
      </div>
      <div>
        <p>タイトル</p>
        <input
          type="text"
          style={{ width: "100%", borderRadius: "5px", padding: "5px 3px" }}
          {...register("your-subject")}
        />
      </div>
      <div>
        <p>内容</p>
        <textarea
          style={{
            width: "100%",
            minHeight: "100px",
            borderRadius: "5px",
            padding: "5px 3px",
          }}
          {...register("your-message")}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <input type="submit" value="送信" />
      </div>
    </form>
  );
};
