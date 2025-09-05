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
            // Mock data for testing
            const mockProjects = [
                {
                    id: 1,
                    title: "Personal Blog",
                    category: "web-development",
                    description: "A simple blog website where I share my thoughts and experiences. Built with HTML, CSS, and JavaScript.",
                    author: "John Smith",
                    createdAt: "2024-01-15"
                },
                {
                    id: 2,
                    title: "Calculator App",
                    category: "mobile-app",
                    description: "Basic calculator app for Android with simple arithmetic operations and a clean interface.",
                    author: "Sarah Johnson",
                    createdAt: "2024-01-12"
                },
                {
                    id: 3,
                    title: "Student Grade Tracker",
                    category: "data-science",
                    description: "Excel spreadsheet to track student grades and calculate averages for my class.",
                    author: "Mike Davis",
                    createdAt: "2024-01-10"
                },
                {
                    id: 4,
                    title: "Recipe Website",
                    category: "web-development",
                    description: "Website to share family recipes with photos and cooking instructions.",
                    author: "Emily Brown",
                    createdAt: "2024-01-08"
                },
                {
                    id: 5,
                    title: "Logo Design",
                    category: "design",
                    description: "Simple logo design for a local coffee shop using basic design principles.",
                    author: "Alex Wilson",
                    createdAt: "2024-01-05"
                },
                {
                    id: 6,
                    title: "To-Do List App",
                    category: "web-development",
                    description: "Simple to-do list application to help organize daily tasks and reminders.",
                    author: "David Lee",
                    createdAt: "2024-01-03"
                },
                {
                    id: 7,
                    title: "Photo Gallery",
                    category: "other",
                    description: "Online photo gallery to showcase vacation pictures and family memories.",
                    author: "Lisa Garcia",
                    createdAt: "2024-01-01"
                },
                {
                    id: 8,
                    title: "Contact Form",
                    category: "web-development",
                    description: "Basic contact form for a small business website with email validation.",
                    author: "Tom Miller",
                    createdAt: "2023-12-28"
                }
            ];
            
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            setProjects(mockProjects);
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
