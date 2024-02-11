namespace WebAppli.Models
{
    public class model_papetrie
    {
        public int Id { get; set; }
        public required string Name { get; set; }

        public required string Texture { get; set; }

        public string? Grammage { get; set; }

        public string? Couleur { get; set; }
    }
}
