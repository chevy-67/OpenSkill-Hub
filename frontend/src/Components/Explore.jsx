import React, { useState, useEffect } from 'react'
import SideBarLeft from '../Components/SideBarLeft';
import Navbar from '../frontend/Navbar';
import './Explore.css';

function Explore() {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            // Replace with your actual API endpoint
            const response = await fetch('/api/projects');
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterCategory === 'all' || project.category === filterCategory;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className='explore-page'>
            <Navbar />
            <div className="app-layout">
                <SideBarLeft />
                <div className="main-content">
                    <div className="explore-header">
                        <h1>Explore Projects</h1>

                        {/* Search Bar */}
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                        </div>

                        {/* Filter Options */}
                        <div className="filter-container">
                            <select
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                                className="filter-select"
                            >
                                <option value="all">All Categories</option>
                                <option value="web-development">Web Development</option>
                                <option value="mobile-app">Mobile App</option>
                                <option value="data-science">Data Science</option>
                                <option value="ai-ml">AI/ML</option>
                                <option value="design">Design</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Projects List */}
                    <div className="projects-container">
                        {loading ? (
                            <div className="loading">Loading projects...</div>
                        ) : filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <div key={project.id} className="project-card">
                                    <h3>{project.title}</h3>
                                    <p className="project-category">{project.category}</p>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-meta">
                                        <span>By: {project.author}</span>
                                        <span>{project.createdAt}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-projects">No projects found matching your criteria.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
