import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  createSong() {
    return 'Create Song';
  }

  @Get()
  fetchAllSongs() {
    return 'Fetch all Songs';
  }

  @Get(':id')
  fetchSongByID() {
    return 'Fetch Song based on ID';
  }

  @Put(':id')
  updateSong() {
    return 'Update Song';
  }

  @Patch(':id')
  partialUpdateSong() {
    return 'Partial Update Song';
  }

  @Delete(':id')
  deleteSong() {
    return 'Delete Song';
  }
}
