import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-2xl font-bold" {...props} />,
    h2: (props) => <h2 className="text-xl font-semibold" {...props} />,
    p: (props) => <p className="mt-4 leading-relaxed" {...props} />,
    a: (props) => <a className="text-blue-600 underline" {...props} />,
    pre: (props) => (
      <pre
        className="mt-4 overflow-x-auto rounded bg-gray-100 p-3 text-sm"
        {...props}
      />
    ),
    code: (props) => <code className="rounded bg-gray-100 px-1" {...props} />,
    ...components,
  };
}

