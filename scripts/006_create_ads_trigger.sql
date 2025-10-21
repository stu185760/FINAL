-- Auto-update updated_at timestamp on ads
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_ad_updated on public.ads;

create trigger on_ad_updated
  before update on public.ads
  for each row
  execute function public.handle_updated_at();
