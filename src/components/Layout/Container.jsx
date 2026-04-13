export default function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto max-w-5xl px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
