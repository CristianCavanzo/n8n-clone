import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
function Page() {
    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center">
            <Button className={cn('bg-blue-500 text-white hover:bg-blue-600')}>
                Click Me
            </Button>
        </div>
    );
}

export default Page;
