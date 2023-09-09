/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpRequest from '@/utils/Http-request';

export const fetchNiche = async ({
  page,
  search,
  pageSize,
}: {
  page: number;
  search?: string;
  pageSize: number;
}) => {
  return (await HttpRequest.get('niche', {
    params: { page, pageSize, search },
  })) as any;
};

export const createNiche = async ({ name }: { name: string }) => {
  return await HttpRequest.post('niche', { name, isActive: true });
};

export const deleteNiche = async (id: string) => {
  return await HttpRequest.delete(`niche/${id}`);
};

export const deleteFilter = async (id: string) => {
  return await HttpRequest.delete(`filter/${id}`);
};

export const getNicheById = async (id: string) => {
  return (await HttpRequest.get(`niche/${id}`)) as any;
};
