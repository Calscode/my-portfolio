export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center px-4 layout-wrapper">
      <div className="max-w-md text-left leading-relaxed tracking-wide">
        {children}
      </div>
    </div>
  );
}