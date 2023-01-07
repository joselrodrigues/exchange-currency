package routes

import (
	c "coinapi/controllers"

	"github.com/gofiber/fiber/v2"
)

func currencies(app *fiber.App) {
	app.Get("/exchangerate", c.Currencies)
}
