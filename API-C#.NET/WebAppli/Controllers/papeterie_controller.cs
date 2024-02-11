using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Api_Papeterie.View_models; // Assurez-vous d'importer le bon espace de noms

namespace Api_Papeterie.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PapeterieController : ControllerBase
    {
        //private static readonly List<Papeterie> Produits = new List<Papeterie>();

        private static readonly List<Papeterie> Produits = new List<Papeterie>
        {
            new Papeterie { Id = 1, Name = "Papier Couché", Texture = "Lisse", Grammage = "200g", Prix = 10, Couleur = "Blanc" },
            new Papeterie { Id = 2, Name = "Papier Offset", Texture = "Rugueux", Grammage = "120g", Prix = 8, Couleur = "Crème" },
            new Papeterie { Id = 3, Name = "Papier Cartonné", Texture = "Épais", Grammage = "250g", Prix = 12, Couleur = "Blanc" },
            new Papeterie { Id = 4, Name = "Papier Recyclé", Texture = "Lisse", Grammage = "100g", Prix = 7, Couleur = "Gris" },
            new Papeterie { Id = 5, Name = "Papier Vélin", Texture = "Extra-lisse", Grammage = "150g", Prix = 15, Couleur = "Ivoire" },
            new Papeterie { Id = 6, Name = "Papier Kraft", Texture = "Rugueux", Grammage = "80g", Prix = 5, Couleur = "Marron" },
            new Papeterie { Id = 7, Name = "Papier Calque", Texture = "Translucide", Grammage = "60g", Prix = 10, Couleur = "Transparent" },
            new Papeterie { Id = 8, Name = "Papier Photo", Texture = "Brillant", Grammage = "220g", Prix = 20, Couleur = "Blanc" },
            new Papeterie { Id = 9, Name = "Papier Aquarelle", Texture = "Grain fin", Grammage = "300g", Prix = 25, Couleur = "Blanc" },
            new Papeterie { Id = 10, Name = "Papier Bristol", Texture = "Ultra-lisse", Grammage = "250g", Prix = 18, Couleur = "Blanc" }
         };


        private readonly ILogger<PapeterieController> _logger;

        public PapeterieController(ILogger<PapeterieController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Papeterie> GetAll()
        {
            return Produits;
        }

        [HttpGet("{id}", Name = "GetProduitById")]
        public ActionResult<Papeterie> Get(int id)
        {
            var produit = Produits.FirstOrDefault(p => p.Id == id);
            if (produit == null)
            {
                return NotFound("Produit non trouvé.");
            }
            return produit;
        }

        [HttpPost]
        public ActionResult<Papeterie> Post([FromBody] Papeterie nouveauProduit)
        {
            // Ici, générez un ID unique pour le nouveau produit
            nouveauProduit.Id = Produits.Count + 1;
            Produits.Add(nouveauProduit);
            return CreatedAtRoute("GetProduitById", new { id = nouveauProduit.Id }, nouveauProduit);
        }

        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Papeterie produitModifie)
        {
            var produit = Produits.FirstOrDefault(p => p.Id == id);
            if (produit == null)
            {
                return NotFound("Produit non trouvé.");
            }

            produit.Name = produitModifie.Name;
            produit.Texture = produitModifie.Texture;
            produit.Grammage = produitModifie.Grammage;
            produit.Prix = produitModifie.Prix;
            produit.Couleur = produitModifie.Couleur;

            return NoContent();
        }

        [HttpDelete("{id}")]
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