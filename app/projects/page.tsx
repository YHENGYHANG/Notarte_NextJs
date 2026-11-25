export const metadata = { title: "Projects | Realm Kindred C. Notarte" };

const projects = [
  { id: 1, name: "Inventory Management", description: "Stores products in an Inventory." },
  { id: 2, name: "Bohol Cultural Heritage Digital Archive", description: "A digital archive preserving Bohol's cultural heritage." },
  { id: 3, name: "Portfolio Website", description: "A responsive portfolio website for showcasing my work." },
];

export default function ProjectsPage() {

    return(
        <nav className="flex min-h-screen flex-col items-center justify-between p-60">
            <div> 
            <h1 className="text-4xl font-bold">Projects Page</h1>
            <p className="mt-2">My projects will appear here</p>
            <br></br>

            <div>
                {projects.map((project) => (
                    <div key={project.id} className="mb-4">
                        <h2 className="text-2xl font-bold">{project.name}</h2>
                        <p className="text-gray-600">{project.description}</p>
                        <hr></hr>
                    </div>
                ))}
            </div>


            </div>
        </nav>

    );
}