package controller

import (
	services "coinapi/services"

	"github.com/gofiber/fiber/v2"
)

func Currencies(c *fiber.Ctx) error {
	return services.Currencies(c)
}
