document.addEventListener('DOMContentLoaded', () => {
    const skillsData = {
      programming: [
        'Programming Languages',
        'Full Stack Developer',
        'Documentation and Simple Software Testing',
        'Associate Technician in Software Development',
      ],
      databases: [
        'SQL and noSQL Database',
        'Big Data',
        'Data Lake',
        'Data Warehouse',
        'Batch and Streaming Data Processing',
      ],
      cloud: [
        'Azure',
        'Cloud Data',
        'Cloud Networking',
        'Cloud Security',
        'Cloud Services',
        'Cloud Storage',
        'Hybrid Cloud',
        'Sales for Cloud',
      ],
      ai: [
        'AI',
        'Machine Learning',
        'Generative AI',
      ],
      'it-infra': [
        'Virtualization',
        'Infrastructure',
        'IT Architects',
        'IT Specialist',
      ],
      systems: [
        'Operating Systems',
        'Windows',
        'AIX',
        'Linux',
        'Systems Administrator',
        'Systems Programmer',
        'Security',
        'Servers',
        'Scale-out',
      ],
      collaboration: [
        'Communication',
        'Collaboration',
        'Co-Creation',
        'Communication Skills',
        'Partnership',
        'Organization',
        'Team Focused',
        'Actionable Insights',
        'Influence',
      ],
      workplace: [
        'Productivity',
        'Trusted Relationships',
        'Emotional Intelligence',
        'Mental Management',
        'Mindfulness',
        'Relaxation Techniques',
        'Self-Awareness',
        'Visualization Practices',
        'Flexible',
        'Courageous',
        'Outcome Focused',
      ],
      agile: [
        'Agile',
        'Agile Kanban',
        'Agile Operations',
        'Iterations',
        'Sprints',
        'Design Thinking',
        'IBM Garage',
        'Methodology',
        'Growth Behaviors',
        'Growth Minded',
      ],
      technical: [
        'SMIT',
        'Shell',
        'Hadoop',
        'Power Hardware',
      ],
    };
  
    const categoryElements = document.querySelectorAll('.category');
    const skillsContainer = document.getElementById('skills-container');
  
    // Add hover effects with random color changes
    categoryElements.forEach(category => {
      category.addEventListener('mouseenter', () => {
        category.style.backgroundColor = getRandomColor();
      });
  
      category.addEventListener('mouseleave', () => {
        category.style.backgroundColor = ''; // Reset color
      });
  
      // Add click functionality to load the associated skills
      category.addEventListener('click', () => {
        const categoryKey = category.getAttribute('data-category');
        renderSkills(skillsData[categoryKey]);
      });
    });
  
    function renderSkills(skills) {
      skillsContainer.innerHTML = '';
      if (skills.length > 0) {
        skills.forEach(skill => {
          const skillEl = document.createElement('div');
          skillEl.classList.add('skill-item');
          skillEl.textContent = skill;
          skillsContainer.appendChild(skillEl);
        });
      } else {
        skillsContainer.innerHTML = '<p>No skills available for this category.</p>';
      }
    }
  
    // Function to generate a random color
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  