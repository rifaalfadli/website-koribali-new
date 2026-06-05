import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
      <Link to="/" className="hover:text-cyan-400 transition-colors flex items-center">
        <Home className="w-4 h-4 mr-1" />
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-600 flex-shrink-0" />
          {item.href ? (
            <Link to={item.href} className="hover:text-cyan-400 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-300">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
