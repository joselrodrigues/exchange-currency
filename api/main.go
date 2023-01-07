package main

import (
	"coinapi/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	routes.Setup(app)
	app.Listen(":4001")
}
