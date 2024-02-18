
export default function Home() {
  async function create(formData: FormData) {
    'use server'
    console.log('>>>check formData', formData.get('username'));
    
  }

  return (
    <>
      <form action={create}>
        <input type="text" name="username" />
        <button type="submit">Save</button>
      </form>
    </>
  )
}
