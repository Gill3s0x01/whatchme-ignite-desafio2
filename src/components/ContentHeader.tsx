
import { useEffect, useState } from 'react';

import { api } from '../services/api';


interface ContentHeaderProps {
  selectedGenreId: number;
}

interface GenreResponseProps {
  title: string;
}
export function ContentHeader({selectedGenreId}: ContentHeaderProps) {

  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);


  useEffect(() => {

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  )
}