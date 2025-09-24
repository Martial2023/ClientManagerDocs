# Introduction

Bienvenue dans la documentation **ClientManager**.  
Cette plateforme permet aux restaurants de gérer efficacement leurs commandes, serveurs et notifications en temps réel.

## Contenu

- [Devices Management](./devices)
- [Servers Management](./servers)
- [Orders Management](./orders)
- [Webhooks](./webhooks)
---

## Base URL
Toutes les requêtes doivent être envoyées à l'URL de base suivante :

```
https://api.clientmanager.com/v1
```

## Endpoints principaux

- [POST /devices/register](./devices.md) — Enregistrer ou mettre à jour un device  
- [GET /servers/:email/restaurants](./servers.md) — Lister les restaurants d’un serveur  
- [GET /servers/:email/:restaurantId/orders](./orders.md) — Lister les commandes d’un serveur  
- [POST /webhook/order-status](./webhooks.md) — Webhook pour notifier les serveurs
