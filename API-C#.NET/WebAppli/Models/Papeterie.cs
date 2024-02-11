namespace Api_Papeterie.View_models
{
    public class Papeterie
    {
        public int Id { get; set; }
        public required string Name { get; set; }

        public required string Texture { get; set; }

        public string? Grammage { get; set; }

        public int? Prix { get; set; }

        public string? Couleur { get; set; }
    }
}