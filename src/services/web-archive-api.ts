import { Snapshot } from '../types';

const getClosestSnapshot = async (timestamp: string, url: string): Promise<Snapshot> => {
  const fetchResult = await fetch(`https://archive.org/wayback/available?url=${url}&timestamp=${timestamp}`);
  if (!fetchResult.ok) {
    throw new Error('Não foi possível encontrar resultados para a sua pesquisa');
  }
  const apiResult = await fetchResult.json();
  if (
    !apiResult.archived_snapshots.closest
    || !apiResult.archived_snapshots.closest.available
  ) {
    throw new Error('Não foi possível encontrar resultados para a sua pesquisa');
  }
  return {
    url: apiResult.archived_snapshots.closest.url,
    timestamp: apiResult.archived_snapshots.closest.timestamp,
  };
};

export default getClosestSnapshot;
