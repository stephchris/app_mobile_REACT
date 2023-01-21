const serverProtocol = 'http'
const serverHost = 'localhost'
const serverPort = 4040
const baseUrl = `${serverProtocol}://${serverHost}:${serverPort}`

const API = {                        
  getBooks: async () => {
    try {
      const response = await fetch(`${baseUrl}/books`)
      return await response.json()   
    } catch (err) {
      console.error(err.message)
      return []
    }
  },


  
  createTodo: async (newBook) => {
    try {
      const response = await fetch(`${baseUrl}/books`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newBook)
      })
      return await response.json()
    } catch (err) {
      console.error(err.message)
    }
  },
  
  updateBook: async (bookId, book) => {
    try {
      const response = await fetch(`${baseUrl}/books/${bookId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
      })
      return await response.json()
    } catch (err) {
      console.error(err.message)
    }
  }
}

export default API
