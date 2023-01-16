package services

import (
	"math"
	"math/rand"
	"time"

	"github.com/gofiber/fiber/v2"
)

type Dictionary map[string]interface{}

func Currencies(c *fiber.Ctx) error {

	rand.Seed(time.Now().Unix())
	dateTime := time.Now()
	data := Dictionary{
		"rates": []Dictionary{
			{"time": dateTime, "asset_id_base": "BTC", "asset_id_quote": "USD", "rate": math.Floor(rand.Float64()*1000) / 1000},
			{"time": dateTime, "asset_id_base": "BTC", "asset_id_quote": "EUR", "rate": math.Floor(rand.Float64()*1000) / 1000},
			{"time": dateTime, "asset_id_base": "ETH", "asset_id_quote": "USD", "rate": math.Floor(rand.Float64()*1000) / 1000},
			{"time": dateTime, "asset_id_base": "ETH", "asset_id_quote": "EUR", "rate": math.Floor(rand.Float64()*1000) / 1000},
			{"time": dateTime, "asset_id_base": "USD", "asset_id_quote": "BTC", "rate": math.Floor(rand.Float64()*1000) / 1000},
			{"time": dateTime, "asset_id_base": "USD", "asset_id_quote": "ETH", "rate": math.Floor(rand.Float64()*1000) / 1000},
			{"time": dateTime, "asset_id_base": "EUR", "asset_id_quote": "BTC", "rate": math.Floor(rand.Float64()*1000) / 1000},
			{"time": dateTime, "asset_id_base": "EUR", "asset_id_quote": "ETH", "rate": math.Floor(rand.Float64()*1000) / 1000},
		},
	}
	return c.JSON(data)
}
