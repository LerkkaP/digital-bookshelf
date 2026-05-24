import { promises as fs } from "fs";

type Book = {
  id: string,
  title: string,
  author: string,
  published: number
}

export default async function Page() {
  const file = await fs.readFile(process.cwd() + "/data/books.json", "utf8")
  const data: Book[] = JSON.parse(file);

  return (
    <div>
      <main className="grid-container">
        {data.map(book => (
          <div className="grid-item" key={book.id}>
            <h2 className="book-title">{book.title}</h2>
            <h3 className="book-author">{book.author}</h3>
            <span className="book-published">{book.published}</span>
          </div>
        ))}
      </main>
    </div>
  );
}
