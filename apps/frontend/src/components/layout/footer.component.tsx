import Link from 'next/link';
import { isGeneral } from '@gitroom/react/helpers/variable.context';

export const FooterComponent = () => {
  const companyName = isGeneral ? 'Postiz' : 'Gitroom';
  
  return (
    <footer className="border-t border-tableBorder mt-auto py-4">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-sm text-gray-400">
        <div>
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <Link 
            href="/terms-and-conditions" 
            className="hover:text-textColor transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link 
            href="/privacy-policy" 
            className="hover:text-textColor transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}; 