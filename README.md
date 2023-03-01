# ehrbase-workspace

Ziel ist die Bereitstellung eines sog. Custom "Workspace Images" für Gitpod siehe hier https://www.gitpod.io/docs/configure/workspaces/workspace-image welches mit Hilfe von Docker Compose eine lokale EHRBase Instanz erstellt. In der Docker Compose müsste die FHIR-Bridge noch rausoperiert werden. Vorsicht bei "depends on". Wenn der check mit CURL auf /health funktioniert, können wir restliche Umgebung machen.
