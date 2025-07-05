
import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Resource } from '../../types/learningPath';
import ResourceCard from './ResourceCard';

interface ResourcesSectionProps {
  resources: Resource[];
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ resources }) => {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredResources = useMemo(() => {
    if (!filterQuery.trim()) {
      return resources;
    }

    const query = filterQuery.toLowerCase();
    return resources.filter(resource => 
      resource.title.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query) ||
      resource.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [resources, filterQuery]);

  const clearFilter = () => {
    setFilterQuery('');
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Learning Resources</h2>
            {resources.length > 0 && (
              <div className="text-sm text-slate-400">
                {filteredResources.length} of {resources.length} resources
                {filterQuery && ` matching "${filterQuery}"`}
              </div>
            )}
          </div>

          {/* Filter Bar */}
          {resources.length > 0 && (
            <div className="mb-6">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Filter resources..."
                  value={filterQuery}
                  onChange={(e) => setFilterQuery(e.target.value)}
                  className="pl-10 pr-10 bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:ring-blue-500 focus:border-blue-500"
                />
                {filterQuery && (
                  <button
                    onClick={clearFilter}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
          
          {resources.length > 0 ? (
            filteredResources.length > 0 ? (
              <div className="space-y-6">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            ) : (
              <Card className="p-12 bg-slate-900/50 border-slate-800 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-3">No Resources Found</h3>
                <p className="text-slate-300 mb-4">
                  No resources match your search for "{filterQuery}". Try a different search term.
                </p>
                <Button onClick={clearFilter} variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  Clear Filter
                </Button>
              </Card>
            )
          ) : (
            <Card className="p-12 bg-slate-900/50 border-slate-800 text-center">
              <div className="text-4xl mb-4">🚧</div>
              <h3 className="text-xl font-semibold text-white mb-3">Resources Coming Soon</h3>
              <p className="text-slate-300">
                We're working hard to bring you comprehensive learning resources for this course. 
                Check back soon for updates!
              </p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
