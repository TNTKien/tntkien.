import { Tabs } from "@animate-ui/react/primitives/base-ui/tabs";

type Project = {
  id: string;
  name: string;
  description: string;
  link: string;
  github?: string;
  category?: "platform" | "tools" | "community";
  tags?: string[];
};

const groups = [
  { value: "all", label: "All" },
  { value: "platform", label: "Platforms" },
  { value: "tools", label: "Tools" },
  { value: "community", label: "Community" },
] as const;

export default function ProjectFilters({ projects }: { projects: Project[] }) {
  return (
    <Tabs.Root defaultValue="all" className="project-filter-root">
      <Tabs.List aria-label="Filter projects" className="project-filter-tabs">
        {groups.map((item) => (
          <Tabs.Tab value={item.value} key={item.value} className="project-filter-tab">
            {item.label} <span className="filter-count">{item.value === "all" ? projects.length : projects.filter(p => p.category === item.value).length}</span>
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {groups.map((group) => (
        <Tabs.Panel value={group.value} key={group.value} className="project-filter-panel">
          <ul className="filtered-projects">
            {projects.filter(p => group.value === "all" || p.category === group.value).map((p) => (
              <li key={p.id}>
                <div className="project-info">
                  <a className="project-title" href={p.link} target="_blank" rel="noopener noreferrer">{p.name} ↗</a>
                  <div className="project-links">
                    <a href={p.link} target="_blank" rel="noopener noreferrer">{new URL(p.link).hostname}</a>
                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
                  </div>
                  <p>{p.description}</p>
                  <div className="project-tags">{(p.tags ?? []).map(t => <span key={t}>{t}</span>)}</div>
                </div>
              </li>
            ))}
          </ul>
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
}
