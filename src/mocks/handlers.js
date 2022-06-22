import { rest } from 'msw';

const handlers = [
  rest.get('https://api.rawg.io/api/genres', (req, res, ctx) => {
    return res(
      ctx.json(
        {
          "count": 19, "next": null, "previous": null, "results": [{ "id": 4, "name": "Action", "slug": "action", "games_count": 153243, "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg" }]
        })
    );
  }),
  rest.get('https://api.rawg.io/api/genres/action', (req, res, ctx) => {
    return res(
      ctx.json({ "id": 4, "name": "Action", "slug": "action", "games_count": 153243, "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg" })
    )
  }),
  rest.get('https://api.rawg.io/api/games', (req, res, ctx) => {
    return res(
      ctx.json({
        "count": 153246,
        "previous": null,
        "results": [
          {
            "slug": "grand-theft-auto-v",
            "name": "Grand Theft Auto V",
            "rating": 4.48,
            "ratings_count": 5720,
            "id": 3498,
          }
        ]
      })
    )
  }),
];

export default handlers;
