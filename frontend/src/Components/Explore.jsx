import React, { useState, useEffect } from 'react'
import SideBarLeft from '../Components/SideBarLeft';
import Navbar from '../frontend/Navbar';
import './Explore.css';

function Explore() {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSkill, setSelectedSkill] = useState('all');

    // Fetch projects from database
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/projects');
                if (response.ok) {
                    const data = await response.json();
                    setProjects(data);
                } else {
                    console.error('Failed to fetch projects');
                }
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const filteredProjects = projects.filter(project => {
        // If there's a search term, filter by search
        if (searchTerm.trim()) {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                project.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
            const matchesSkill = selectedSkill === 'all' || project.skills.includes(selectedSkill);
            
            return matchesSearch && matchesCategory && matchesSkill;
        } else {
            // If no search term, only apply category and skill filters
            const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
            const matchesSkill = selectedSkill === 'all' || project.skills.includes(selectedSkill);
            
            return matchesCategory && matchesSkill;
        }
    });

    const categories = ['all', 'Web Development', 'Mobile Development', 'Data Science', 'AI/ML'];
    const skills = ['all', 'React', 'Node.js', 'React Native', 'Firebase', 'Python', 'Pandas', 'TensorFlow'];

    return (
        <div className='explore-page'>
            <Navbar/>
            <div className="app-layout">
                <SideBarLeft />
                <div className="main-content">
                    <div className="explore-header">
                        <h1>Explore Projects</h1>
                        <p>Discover amazing projects and collaborate with developers</p>
                    </div>

                    {/* Search Bar */}
                    <div className="search-section">
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="filters-section">
                        <div className="filter-group">
                            <label>Category:</label>
                            <select 
                                value={selectedCategory} 
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="filter-select"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category === 'all' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="filter-group">
                            <label>Skills:</label>
                            <select 
                                value={selectedSkill} 
                                onChange={(e) => setSelectedSkill(e.target.value)}
                                className="filter-select"
                            >
                                {skills.map(skill => (
                                    <option key={skill} value={skill}>
                                        {skill === 'all' ? 'All Skills' : skill}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Projects List */}
                    <div className="projects-section">
                        <h2>Projects ({filteredProjects.length})</h2>
                        <div className="projects-grid">
                            {filteredProjects.map(project => (
                                <div key={project.id} className="project-card">
                                    <h3>{project.title}</h3>
                                    <p className="project-category">{project.category}</p>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-skills">
                                        {project.skills.map(skill => (
                                            <span key={skill} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
