# Projects Data Schema

## Overview
The projects schema has been updated to accommodate real-world project portfolio data with enhanced metadata and flexibility.

## Type Definitions

### ProjectCategory
Available project categories:

```typescript
type ProjectCategory = "Clothing" | "Beauty" | "Jewelry" | "Furniture" | "Dashboard" | "Web3" | "Sports";
```

### Project Interface

```typescript
interface Project {
  // Required fields
  id: string;                           // Unique project identifier
  title: string;                        // Project name
  description: string;                  // Brief project description
  category: ProjectCategory;            // Project category
  type: "Team" | "Freelance" | "Self";  // Project type
  tech: string[];                       // Technologies used
  live: string;                         // Live project URL

  // Optional fields
  client?: string;                      // Client or company name
  database?: string;                    // Database technology used
  status?: "In Progress" | "Completed" | "Deployed";  // Current status
  badges?: string[];                    // Status badges (e.g., "Done", "Deployed")
  github?: string;                      // GitHub repository URL
  metrics?: { label: string; value: string }[];  // Key metrics
  gradient?: string;                    // CSS gradient for visual styling
}
```

## Field Descriptions

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `id` | string | Unique identifier (kebab-case) | `"under-armour"` |
| `title` | string | Project display name | `"Under Armour Store"` |
| `description` | string | Brief project description | `"E-commerce platform..."` |
| `category` | ProjectCategory | Project category | `"Clothing"` |
| `type` | string | Team/Freelance/Self | `"Freelance"` |
| `tech` | string[] | Technology stack | `["React", "MySQL"]` |
| `live` | string | Live project URL or "#" | `"https://example.com"` |

### Optional Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `client` | string | Client name | `"Under Armour"` |
| `database` | string | Database technology | `"MySQL"` |
| `status` | string | Project status | `"Completed"` |
| `badges` | string[] | Status labels | `["Done", "Deployed"]` |
| `github` | string | GitHub repo URL | `"https://github.com/..."` |
| `metrics` | array | Key performance data | `[{ label: "Users", value: "1.2M" }]` |
| `gradient` | string | CSS gradient | `"linear-gradient(...)"` |

## Current Projects

### 1. Town Team
- **Category**: Clothing
- **Type**: Team
- **Tech**: React
- **Status**: Active

### 2. Under Armour Store
- **Category**: Clothing
- **Type**: Team
- **Tech**: React, MySQL
- **Client**: Under Armour
- **Live**: https://under-armour73.vercel.app/

### 3. Ohanna Landing Page
- **Category**: Clothing
- **Type**: Freelance
- **Tech**: React, PostgreSQL
- **Client**: Dark Primid
- **Live**: https://ohanna-landing-page.vercel.app/

### 4. Lumina Beauty
- **Category**: Beauty
- **Type**: Freelance
- **Tech**: React
- **Live**: https://lumina773.netlify.app/

### 5. Little Boys Fashion
- **Category**: Clothing
- **Type**: Freelance
- **Tech**: React
- **Live**: https://little-boys.vercel.app/

### 6. Clothing Shop
- **Category**: Clothing
- **Type**: Freelance
- **Tech**: React, PostgreSQL
- **Live**: https://clothing-shop-pearl.vercel.app/

### 7. Lumina (Beauty Platform)
- **Category**: Beauty
- **Type**: Freelance
- **Tech**: React
- **Live**: https://lumina-pi-two.vercel.app/

### 8. Linea Jewelry Store
- **Category**: Jewelry
- **Type**: Freelance
- **Tech**: React
- **Status**: Completed
- **Badges**: Done, Deployed
- **Live**: https://missoma.vercel.app/

### 9. Vingo Roll
- **Category**: Furniture
- **Type**: Team
- **Tech**: React, Web3
- **Live**: https://vingo-roll.netlify.app/

### 10. E-Inventory Dashboard
- **Category**: Dashboard
- **Type**: Self
- **Tech**: React
- **Status**: Completed
- **Live**: https://e-inventory73.netlify.app/

### 11. Velocity Swimming
- **Category**: Sports
- **Type**: Team
- **Tech**: React, Web3
- **Live**: https://velocity73.netlify.app/

## Project Filters

Available filter options:

```typescript
["All", "Clothing", "Beauty", "Jewelry", "Furniture", "Dashboard", "Web3", "Sports"]
```

## Statistics by Category

| Category | Count | Types |
|----------|-------|-------|
| Clothing | 4 | Team, Freelance |
| Beauty | 2 | Freelance |
| Jewelry | 1 | Freelance |
| Furniture | 1 | Team (Web3) |
| Dashboard | 1 | Self |
| Sports | 1 | Team (Web3) |

## Technology Usage

| Tech | Projects | Count |
|------|----------|-------|
| React | All | 11 |
| PostgreSQL | 3 | Ohanna, Clothing Shop, + optional |
| MySQL | 1 | Under Armour |
| Web3 | 2 | Vingo Roll, Velocity |

## Project Types Distribution

| Type | Count | Percentage |
|------|-------|-----------|
| Freelance | 6 | 55% |
| Team | 4 | 36% |
| Self | 1 | 9% |

## Adding New Projects

To add a new project:

```typescript
{
  id: "project-slug",
  title: "Project Title",
  description: "Brief description of the project",
  category: "Clothing", // or other category
  type: "Freelance", // or Team/Self
  tech: ["React", "PostgreSQL"],
  live: "https://example.com",
  // Optional fields
  client: "Client Name",
  database: "PostgreSQL",
  status: "Completed",
  badges: ["Done"],
  github: "https://github.com/...",
}
```

## Updating Project Filters

When adding a new category:

1. Add to `ProjectCategory` type:
```typescript
type ProjectCategory = "Clothing" | "Beauty" | "Jewelry" | "Furniture" | "Dashboard" | "Web3" | "Sports" | "NewCategory";
```

2. Add to `projectFilters`:
```typescript
export const projectFilters: (ProjectCategory | "All")[] = [
  "All",
  "Clothing",
  // ... existing
  "NewCategory",
];
```

## Component Integration

### Projects Component Usage

```tsx
import { projects, projectFilters, type Project } from "@/data";

// Access all projects
projects.map(project => (
  <ProjectCard key={project.id} project={project} />
))

// Filter by category
const filtered = projects.filter(p => p.category === selectedCategory);

// Access specific fields
console.log(project.title);        // string
console.log(project.tech);         // string[]
console.log(project.live);         // string (URL)
console.log(project.type);         // "Team" | "Freelance" | "Self"
```

## Best Practices

1. **ID Format**: Use kebab-case for project IDs
2. **Descriptions**: Keep descriptions 2-3 sentences
3. **Tech Stack**: List only primary technologies (2-4 items)
4. **URLs**: Use full HTTPS URLs for live projects, "#" for inactive
5. **Categories**: Choose most relevant category
6. **Gradients**: Use consistent oklch() color format

## Gradient Format

All gradients use oklch() color space for consistency:

```typescript
"linear-gradient(135deg, oklch(L C H), oklch(L C H))"
```

Example:
```typescript
gradient: "linear-gradient(135deg, oklch(0.6 0.18 30), oklch(0.45 0.12 320))"
```

## Data Validation

When adding/updating projects, verify:

- [x] `id` is unique and in kebab-case
- [x] `title` is descriptive
- [x] `category` exists in ProjectCategory type
- [x] `type` is "Team", "Freelance", or "Self"
- [x] `tech` is array of strings
- [x] `live` is valid URL or "#"
- [x] All required fields present
- [x] Optional fields are appropriate for project

## Future Enhancements

1. **Images**: Add image/thumbnail field
2. **Testimonials**: Link to project testimonials
3. **Team Members**: Array of team members for Team projects
4. **Duration**: Add start and end dates
5. **Stats**: Add project-specific statistics
6. **Tags**: Additional metadata tags
7. **GitHub**: GitHub repository link
8. **Demo Video**: Video walkthrough URL
9. **Award**: Awards or recognition
10. **Lessons**: Key learnings from project
