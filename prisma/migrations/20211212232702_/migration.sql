-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anime" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "capa" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "personagem" TEXT NOT NULL,
    "produtora" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AnimeToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Anime_titulo_key" ON "Anime"("titulo");

-- CreateIndex
CREATE UNIQUE INDEX "_AnimeToUser_AB_unique" ON "_AnimeToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AnimeToUser_B_index" ON "_AnimeToUser"("B");

-- AddForeignKey
ALTER TABLE "_AnimeToUser" ADD FOREIGN KEY ("A") REFERENCES "Anime"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
