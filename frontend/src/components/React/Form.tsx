import React from "react"
import { useState } from "react"

export const Form = () => {

  const handleSubmitForm = () => {
    console.log("送信")
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <p>お名前</p>
        <input type="text" style={{ width: "100%", borderRadius: "5px", padding: "5px 3px" }} />
      </div>
      <div>
        <p>お名前（カナ）</p>
        <input type="text" style={{ width: "100%", borderRadius: "5px", padding: "5px 3px" }} />
      </div>
      <div>
        <p>メールアドレス</p>
        <input type="mail" style={{ width: "100%", borderRadius: "5px", padding: "5px 3px" }} />
      </div>
      <div>
        <p>電話番号</p>
        <input type="text" style={{ width: "100%", borderRadius: "5px", padding: "5px 3px" }} />
      </div>
      <div>
        <p>内容</p>
        <textarea style={{ width: "100%", minHeight: "100px", borderRadius: "5px", padding: "5px 3px" }} />
      </div>
      <div style={{ textAlign: "center" }}>
        <input type="submit" value="送信" />
      </div>
    </form>
  )
}