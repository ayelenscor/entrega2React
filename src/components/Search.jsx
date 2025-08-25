function Search({ text }) {
  return (
    <input
      type="text"
      placeholder={text}
      style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
    />
  )
}

export default Search
