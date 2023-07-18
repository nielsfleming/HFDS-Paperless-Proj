import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faWarning, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Label } from '../Label';
import { DragEvent, useState } from 'react';

export interface FileUploadProps {
    title?: string;
    description?: string;
    acceptedTypes?: string[]; // pass in extension not MIME types
    bottomLabel?: string;
    onChange(changedFiles: File[]): void;
    files: File[];
    maxFiles?: number;
}

export function FileUpload({
    title,
    description,
    acceptedTypes,
    bottomLabel = acceptedTypes?.map(e => e.slice(1).toUpperCase()).join(', ') +
        ' files are supported',
    onChange,
    files,
    maxFiles = Infinity
}: FileUploadProps) {
    const [dragActive, setDragActive] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    const handleDrop = (e: DragEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();
        handleNewFiles(e.dataTransfer.files);
        setDragActive(false);
    };

    const handleDrag = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter') setDragActive(true);
        else if (e.type === 'dragleave') setDragActive(false);
    };

    const handleNewFiles = (fileList: FileList) => {
        setErrors([]);
        const currErrors: string[] = [];
        const currFiles = Array.from(fileList);
        const newFiles = currFiles.filter(f => !files.some(f2 => f2.name === f.name));
        const good = acceptedTypes
            ? newFiles.filter(f =>
                  acceptedTypes.some(t => f.name.toLowerCase().endsWith(t.toLowerCase()))
              )
            : newFiles;
        const numInvalid = newFiles.length - good.length;
        if (numInvalid) currErrors.push(`You uploaded an unsupported file type`);
        if (good.length + files.length > maxFiles) {
            currErrors.push(`You can only upload ${maxFiles} file(s)`);
        }
        setErrors(currErrors);
        onChange(
            files
                .map(f => {
                    const other = currFiles.find(f2 => f.name === f2.name);
                    return other && other.lastModified > f.lastModified ? other : f;
                })
                .concat(good.slice(0, maxFiles - files.length))
        );
    };

    const handleRemoveFile = (file: File) => {
        setErrors([]);
        onChange(files.filter(f => f !== file));
    };

    return (
        <div className='flex flex-col [&]:gap-3 w-full min-w-min'>
            <div className='flex flex-col'>
                <div className='text-primary-purple-50 font-semibold'>{title}</div>
                <div className='flex [&]:text-sm [&]:gap-2 items-center text-neutral-50'>
                    {description}
                </div>
            </div>
            <label className='flex flex-col [&]:gap-1 text-neutral-50 cursor-pointer'>
                <div
                    onDragOver={handleDrag}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    className={`${
                        dragActive ? 'bg-neutral-40/30 [&>*]:pointer-events-none' : ''
                    } flex items-center justify-center border-neutral-50 border-dashed [&]:border-2 rounded-xl [&]:p-9`}>
                    {files.length > 0 ? (
                        <div className='flex flex-col [&]:gap-2 items-center justify-center'>
                            <FontAwesomeIcon
                                className='fa-3x text-success-green-50'
                                icon={faCircleCheck}
                            />
                            <div className='items-center [&]:text-sm'>
                                File(s) successfully uploaded
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col [&]:gap-2 items-center justify-center'>
                            <FontAwesomeIcon className='fa-3x' icon={faCloudArrowUp} />
                            <div className='items-center [&]:text-sm'>
                                Drag and drop or{' '}
                                <span className='underline font-medium'>choose a file</span>
                            </div>
                        </div>
                    )}
                </div>
                <input
                    type='file'
                    multiple
                    className='hidden'
                    accept={acceptedTypes + ''}
                    onChange={e => handleNewFiles(e.target.files!)}
                    value=''
                />
            </label>
            <div className='[&]:text-sm'>{bottomLabel}</div>
            {!!errors.length && (
                <div className='text-xs text-error-red-50'>
                    {errors.map((err, i) => (
                        <div key={i}>
                            <FontAwesomeIcon icon={faWarning} /> {err}
                        </div>
                    ))}
                </div>
            )}
            {files && (
                <div className='flex [&]:gap-2 flex-wrap'>
                    {files.map((file, index) => (
                        <Label
                            key={index}
                            label={file.name}
                            size='sm'
                            variant='close'
                            type='accent'
                            mode='dark'
                            onDismiss={() => handleRemoveFile(file)}
                            className='select-none transition-all duration-200 hover:bg-primary-purple-20 hover:line-through hover:text-primary-purple-50 [&]:text-sm'></Label>
                    ))}
                </div>
            )}
        </div>
    );
}
