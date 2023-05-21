'use client'

export default function Checkbox() {

    return (
        <div>
            <label htmlFor="isPublic" className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
                <input onChange={(value) => {console.log(value)}} type="checkbox" name='isPublic' id='isPublic' value='true' className='h-4 w-3 rounded border-gray-400 bg-gray-700' />
                Tornar memória pública
            </label>
        </div>)
}