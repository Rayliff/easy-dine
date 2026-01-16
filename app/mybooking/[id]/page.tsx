export default function BookingDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Detail Booking: {params.id}</h1>
    </div>
  );
}