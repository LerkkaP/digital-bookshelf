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
  console.log(data)
  return (
    <div>
      <main>
        {data.map(book => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <span>{book.published}</span>
          </div>
        ))}
      </main>
    </div>
  );
}
