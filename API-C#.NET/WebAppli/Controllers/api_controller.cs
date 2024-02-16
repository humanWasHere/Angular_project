using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using WebAppli.Models;

namespace Api_Papeterie.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PapeterieController : ControllerBase
    {

        private static readonly List<model_papetrie> Produits = new List<model_papetrie>
        {
            new model_papetrie { Id = 1, Name = "Papier Couché", Texture = "Lisse", Grammage = "200g", Couleur = "Blanc" },
            new model_papetrie { Id = 2, Name = "Papier Offset", Texture = "Rugueux", Grammage = "120g", Couleur = "Crème" },
            new model_papetrie { Id = 3, Name = "Papier Cartonné", Texture = "Épais", Grammage = "250g", Couleur = "Blanc" },
            new model_papetrie { Id = 4, Name = "Papier Recyclé", Texture = "Lisse", Grammage = "100g", Couleur = "Gris" },
            new model_papetrie { Id = 5, Name = "Papier Vélin", Texture = "Extra-lisse", Grammage = "150g", Couleur = "Ivoire" },
            new model_papetrie { Id = 6, Name = "Papier Kraft", Texture = "Rugueux", Grammage = "80g", Couleur = "Marron" },
            new model_papetrie { Id = 7, Name = "Papier Calque", Texture = "Translucide", Grammage = "60g", Couleur = "Transparent" },
            new model_papetrie { Id = 8, Name = "Papier Photo", Texture = "Brillant", Grammage = "220g", Couleur = "Blanc" },
            new model_papetrie { Id = 9, Name = "Papier Aquarelle", Texture = "Grain fin", Grammage = "300g", Couleur = "Blanc" },
            new model_papetrie { Id = 10, Name = "Papier Bristol", Texture = "Ultra-lisse", Grammage = "250g", Couleur = "Blanc" }
         };


        private readonly ILogger<PapeterieController> _logger;

        public PapeterieController(ILogger<PapeterieController> logger)
        {
            _logger = logger;
        }

        [HttpGet]  //get method - read
        public IEnumerable<model_papetrie> GetAll()
        {
            return Produits;
        }

        [HttpGet("{id}", Name = "GetProduitById")]
        public ActionResult<model_papetrie> Get(int id)
        {
            var produit = Produits.FirstOrDefault(p => p.Id == id);
            if (produit == null)
            {
                return NotFound("Produit non trouvé.");
            }
            return produit;
        }

        [HttpPost]  //post method - create
        public ActionResult<model_papetrie> Post([FromBody] model_papetrie nouveauProduit)
        {
            // Ici, générez un ID unique pour le nouveau produit
            // Commentaire Thibaut : ok, c'est ce que je vous avez dit de faire
            // Ca pose malgré tout un problème de gestion d'état, faites moi penser à parler des services stateless, c'est important
            nouveauProduit.Id = Produits.Count + 1;
            Produits.Add(nouveauProduit);
            return CreatedAtRoute("GetProduitById", new { id = nouveauProduit.Id }, nouveauProduit);
        }

        [HttpPut("{id}")]  // put method - update
        public ActionResult Put(int id, [FromBody] model_papetrie produitModifie)
        {
            var produit = Produits.FirstOrDefault(p => p.Id == id);
            if (produit == null)
            {
                return NotFound("Produit non trouvé.");
            }

            produit.Name = produitModifie.Name;
            produit.Texture = produitModifie.Texture;
            produit.Grammage = produitModifie.Grammage;
            produit.Couleur = produitModifie.Couleur;

            return NoContent();
        }

        [HttpDelete("{id}")]  // delete method
        public ActionResult Delete(int id)
        {
            var produit = Produits.FirstOrDefault(p => p.Id == id);
            if (produit == null)
            {
                return NotFound("Produit non trouvé.");
            }

            Produits.Remove(produit);
            return Ok("Produit supprimé.");
        }
    }
}