import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { UserList } from './components/UserList';
import { ContentEdit } from './components/ContentEdit';
import { Structure } from './components/Structure';
import { Images } from './components/Images';
import { OtherData } from './components/OtherData';
import { ContextType, PageType } from './types';

function App() {
  const [currentContext, setCurrentContext] = useState<ContextType>('DATA');
  const [currentPage, setCurrentPage] = useState<PageType>('USER_LIST');

  // Automatically switch default page when context changes
  useEffect(() => {
    if (currentContext === 'DATA') {
      if (currentPage !== 'USER_LIST' && currentPage !== 'OTHER_DATA') {
        setCurrentPage('USER_LIST');
      }
    } else {
      if (currentPage !== 'PAGE_STRUCTURE' && currentPage !== 'EDIT_TEXT' && currentPage !== 'IMAGE_MANAGER') {
        setCurrentPage('PAGE_STRUCTURE');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentContext]);

  const renderContent = () => {
    switch (currentPage) {
      case 'USER_LIST':
        return <UserList />;
      case 'EDIT_TEXT':
        return <ContentEdit />;
      case 'PAGE_STRUCTURE':
        return <Structure />;
      case 'IMAGE_MANAGER':
        return <Images />;
      case 'OTHER_DATA':
        return <OtherData />;
      default:
        return <div className="p-4 text-red-500">Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header 
        currentContext={currentContext} 
        setContext={setCurrentContext} 
      />

      <div className="flex flex-1 container mx-auto max-w-full md:max-w-7xl px-0 md:px-4 py-4 md:py-6 gap-6">
        <Sidebar 
          context={currentContext}
          currentPage={currentPage}
          setPage={setCurrentPage}
        />

        <main className="flex-1 min-w-0">
          <div className="bg-white rounded-lg shadow-md p-6 min-h-full">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;