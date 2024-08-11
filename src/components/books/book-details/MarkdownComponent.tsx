import MarkdownPreview from "@uiw/react-markdown-preview";

type Props = {
  content: string;
};
export const MardownComponent = ({ content }: Props) => {
  return (
    <MarkdownPreview
      source={content}
      className="!bg-transparent !font-nunito !text-inherit"
      components={{
        h1: ({ children, ...props }) => (
          <h1 {...props} className="text-3xl font-bold my-4">
            {children}
          </h1>
        ),
        h2: ({ children, ...props }) => (
          <h2 {...props} className="text-2xl font-semibold my-3">
            {children}
          </h2>
        ),
        p: ({ children, ...props }) => (
          <p {...props} className="text-base leading-7 my-2">
            {children}
          </p>
        ),
        blockquote: ({ children, ...props }) => (
          <blockquote
            {...props}
            className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-4"
          >
            {children}
          </blockquote>
        ),
        code: ({ children, ...props }) => (
          <code {...props} className="bg-gray-200 text-red-600 px-1 rounded">
            {children}
          </code>
        ),
        pre: ({ children, ...props }) => (
          <pre
            {...props}
            className="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"
          >
            {children}
          </pre>
        ),
        a: ({ children, ...props }) => (
          <a {...props} className="text-blue-500 underline hover:text-blue-700">
            {children}
          </a>
        ),
        li: ({ children, ...props }) => (
          <li {...props} className="list-disc ml-5 marker:text-blue-600">
            {children}
          </li>
        ),
        ul: ({ children, ...props }) => (
          <ul {...props} className="list-disc pl-6">
            {children}
          </ul>
        ),
        ol: ({ children, ...props }) => (
          <ol {...props} className="list-decimal pl-6">
            {children}
          </ol>
        ),
        img: ({ ...props }) => (
          <img {...props} className="max-w-full h-auto rounded-md my-4" />
        ),
        table: ({ children, ...props }) => (
          <table
            {...props}
            className="min-w-full bg-white border border-gray-200"
          >
            {children}
          </table>
        ),
        thead: ({ children, ...props }) => (
          <thead {...props} className="bg-gray-50">
            {children}
          </thead>
        ),
        tbody: ({ children, ...props }) => (
          <tbody {...props} className="divide-y divide-gray-200">
            {children}
          </tbody>
        ),
        tr: ({ children, ...props }) => (
          <tr {...props} className="hover:bg-gray-100">
            {children}
          </tr>
        ),
        th: ({ children, ...props }) => (
          <th
            {...props}
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {children}
          </th>
        ),
        td: ({ children, ...props }) => (
          <td
            {...props}
            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
          >
            {children}
          </td>
        ),
        hr: ({ ...props }) => (
          <hr {...props} className="border-t border-gray-300 my-4" />
        ),
        em: ({ children, ...props }) => (
          <em {...props} className="italic text-gray-700">
            {children}
          </em>
        ),
        strong: ({ children, ...props }) => (
          <strong {...props} className="font-bold text-gray-900">
            {children}
          </strong>
        ),
        div: ({ children, ...props }) => (
          <div {...props} className="my-4">
            {children}
          </div>
        ),
        section: ({ children, ...props }) => (
          <section {...props} className="my-4">
            {children}
          </section>
        ),
        article: ({ children, ...props }) => (
          <article {...props} className="my-4">
            {children}
          </article>
        ),
      }}
    />
  );
};
