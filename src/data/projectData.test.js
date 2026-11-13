import { projectData, featuredProjects, filters } from "./projectData";

test("portfolio project slugs and repositories are unique", () => {
  expect(new Set(projectData.map((project) => project.id)).size).toBe(projectData.length);
  expect(new Set(projectData.map((project) => project.repo)).size).toBe(projectData.length);
});

test("projects have accurate, safe external link shapes", () => {
  projectData.forEach((project) => {
    expect(project.title).toBeTruthy();
    expect(project.description.length).toBeGreaterThan(30);
    expect(project.tags.length).toBeGreaterThan(0);
    expect(project.repo).toMatch(/^https:\/\/github\.com\/wiilki\//);
    expect(filters).toContain(project.category);
    if (project.live) {
      expect(new URL(project.live).protocol).toBe("https:");
      expect(new URL(project.live).hostname).toBeTruthy();
    }
  });
});

test("featured items exist in the main project catalog", () => {
  expect(featuredProjects).toHaveLength(3);
  featuredProjects.forEach((project) => {
    expect(projectData).toContain(project);
    expect(project.live).toBeTruthy();
  });
});
