import { ReactNode } from 'react';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'Postiz' : 'Gitroom'}`,
  description: 'Legal information and policies',
};

export default function PublicLayout({ children }: { children: ReactNode }) {
  const companyName = 'Kaziday';
  
  return (
    <div className="min-h-screen bg-primary text-textColor">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            {companyName}
          </Link>
        </div>
        
        {/* Main Content */}
        <main className="mb-12">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="border-t border-gray-600 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} {companyName}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/terms-and-conditions" 
                className="text-gray-400 hover:text-textColor transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-textColor transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/auth/login" 
                className="text-gray-400 hover:text-textColor transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 