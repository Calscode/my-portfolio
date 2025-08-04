export default function Footer() {
  return (
    <footer className="w-full text-center py-6 mt-12 border-t border-gray-700 text-sm text-gray-400">
      <p>&copy; {new Date().getFullYear()} Calvin. All rights reserved.</p>
      <p>
        For more info, please contact <span className="italic">yours truly</span> at{" "}
        <a
          href="mailto:calvinsjobemail.com"
          className="text-blue-400 hover:underline"
        >
          calvinsjobemail.com
        </a>
        .
      </p>
    </footer>
  );
}