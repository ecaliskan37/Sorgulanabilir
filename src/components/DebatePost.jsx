import { useState } from 'react'
import PostComments from './PostComments'
import PostContent from './PostContent'
import postData from '../postData'

export default function DebatePost() {
  /* Challenge 

Form çalışmıyor. Göreviniz, kullanıcı "Gönder "e tıkladığında gönderiye bir yorum ekleyen kontrollü 
bir form yapmaktır.

    1. Yorum, yorum dizisinin alt kısmında, girilen kullanıcı adı ve yorum metni önceki 
    yorumlar gibi görüntülenecek şekilde görünmelidir. 
       
    2. Yorum, önceki yorumların verilerini içeren array'e eklenmelidir. 
    
    3. Girilen kullanıcı adı kaydedilmeli, ancak kullanıcı onay kutusunu işaretlers
    e "AnonimKullanıcı" olarak görünmelidir.
    
    4. Kullanıcı formu göndermek için text input elemanına ve comment box elemanına 
    metin girmek zorunda olmalı ve kullanıcı bir yorum gönderdikten sonra elemanlar ve 
    onay kutusu temizlenmelidir. Sayfa yüklendiğinde de boş olmalıdırlar.   
        
    5. Kodunuz tamamen bu dosyanın içinde yer alabilir, ancak isterseniz bazı kısımları taşıyabilirsiniz. 

*/

  const [comments, setComments] = useState(postData.comments)
  const [comment, setComment] = useState({
    userName: "",
    isAnonymous: false,
    commentText: ""
  })

  const handleClick = (e) => {
    e.preventDefault()
    if ((comment.userName || comment.isAnonymous) && comment.commentText) {
      setComments((p) => [...p, comment])
      setComment({
        userName: "",
        isAnonymous: false,
        commentText: ""
      })
    }
    else {
      alert("Hatalı")
    }
    console.log(comment)
  }

  return (
    <div className='post-container'>
      <PostContent data={{ ...postData }} />
      <PostComments data={comments} />
      <form onSubmit={handleClick}>
        <input
          className='text-input'
          type='text'
          placeholder='Kullanıcı adı girin.'
          value={comment.userName}
          onChange={(e) => setComment((p) => ({ ...p, userName: e.target.value }))}
        />
        <textarea placeholder='Ne düşünüyorsunuz?'
          value={comment.commentText}
          onChange={(e) => setComment((p) => ({ ...p, commentText: e.target.value }))}
          required />
        <label>
          <input className='checkbox' type='checkbox'
            defaultValue={false}
            checked={comment.isAnonymous}
            onChange={(e) => setComment((p) => ({ ...p, isAnonymous: !p.isAnonymous }))} />
          İsimsiz mi göndereyim?
        </label>
        <button type="submit">Gönder</button>
      </form>
    </div>
  )
}
