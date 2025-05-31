"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Stethoscope, Newspaper, Network } from "lucide-react"
import Image from "next/image"

const projectsData = [
	{
		id: 1,
		title: "VolunTracker App",
		description:
			"A modernized volunteer tracking system for hospitals. Volunteers log hours, admins manage data, and everything syncs via RESTful APIs.",
		image: "/volunteer-app.svg",
		icon: Stethoscope,
		tags: ["React", "Node.js", "Express", "MongoDB", "REST API"],
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		id: 2,
		title: "Kaleida News Aggregator",
		description:
			"Pulled content from a third-party platform, implemented article filters, likes, and image carousels using FancyBox and Splide.",
		image: "/news-app.svg",
		icon: Newspaper,
		tags: ["Next.js", "TypeScript", "FancyBox", "Splide.js"],
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		id: 3,
		title: "FirstUp API Integration",
		description:
			"Created a .NET Web API to fetch and display news content and authentication tokens via SocialChorus API.",
		image: "/api-app.svg",
		icon: Network,
		tags: [".NET", "C#", "Web API", "OAuth"],
		githubUrl: "#",
		liveUrl: "#",
	},
]

export function Projects() {
	return (
		<section id="projects" className="space-y-8">
			<div className="text-center">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
					My Projects
				</h2>
				<p className="mt-4 text-lg text-muted-foreground">
					A selection of my recent work and personal projects
				</p>
			</div>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{projectsData.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5">
							<div className="relative aspect-video w-full overflow-hidden bg-muted">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
							<CardHeader>
								<div className="flex items-center gap-2">
									<project.icon className="h-6 w-6 text-primary" />
									<CardTitle>{project.title}</CardTitle>
								</div>
							</CardHeader>
							<CardContent className="space-y-4">
								<CardDescription>{project.description}</CardDescription>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<Badge key={tag} variant="secondary">
											{tag}
										</Badge>
									))}
								</div>
							</CardContent>
							<CardFooter className="flex gap-2">
								<Button asChild variant="outline" size="sm">
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="gap-2"
									>
										<Github size={16} /> Code
									</a>
								</Button>
								<Button asChild size="sm">
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="gap-2"
									>
										<ExternalLink size={16} /> Live Demo
									</a>
								</Button>
							</CardFooter>
						</Card>
					</motion.div>
				))}
			</div>
		</section>
	)
}
