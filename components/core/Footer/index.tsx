import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-screen h-20 bg-gray-50">
      <p>Copyright &copy; {new Date().getFullYear()} Festival Relawan</p>
    </footer>
  );
};

export default React.memo(Footer);
