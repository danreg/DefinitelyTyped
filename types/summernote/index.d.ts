// Type definitions for Summernote 0.8
// Project: https://github.com/summernote/summernote#readme
// Definitions by: Wouter Staelens <https://github.com/wstaelens>
//                 Denny Harijanto <https://github.com/nusantara-cloud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="jquery"/>

declare global {
	namespace Summernote {
		interface Options {
			airMode?: boolean;
			callbacks?: any; // todo
			codemirror?: CodemirrorOptions;
			colors?: colorsDef;
			dialogsInBody?: boolean;
			dialogsFade?: boolean;
			direction?: string;
			disableDragAndDrop?: boolean;
			focus?: boolean;
			fontNames?: string[];
			fontNamesIgnoreCheck?: string[];
			height?: number;
			hint?: HintOptions;
			icons?: IconsOptions;
			insertTableMaxSize?: InsertTableMaxSizeOptions;
			keyMap?: KeyMapOptions;
			lang?: string;
			lineHeights?: string[];
			minHeight?: number;
			maxHeight?: number;
			maximumImageFileSize?: any;
			modules?: ModuleOptions;
			popover?: PopoverOptions;
			placeholder?: string;
			shortcuts?: boolean;
			styleTags?: styleTagsOptions[];
			styleWithSpan?: boolean;
			tabsize?: number;
			tableClassName?: string;
			textareaAutoSync?: boolean;
			toolbar?: toolbarDef;
			width?: number;
		}

		type toolbarGroupCustom = string;
        type toolbarGroups = 'style' | 'font' | 'fontsize' | 'color' | 'para' | 'height' | 'table' | 'insert' | 'view' | 'help' | toolbarGroupCustom;
        type toolbarGroupOptionCustom = string;
        type toolbarGroupOptions = 'style' | 'bold' | 'italic' | 'underline' | 'clear'
                                    | 'strikethrough' | 'superscript' | 'subscript'
                                    | 'fontsize' | 'color' | 'ul' | 'ol' | 'paragraph'
                                    | 'height' | 'table' | 'link' | 'picture' | 'hr'
                                    | 'fullscreen' | 'codeview' | 'undo' | 'redo' | 'help' | toolbarGroupOptionCustom ;
        type toolbarDef = [toolbarGroups, Array<toolbarGroupOptions>][];

		type colorsDef = Array<[string[]]>;
		type styleTagsOptions = 'p' | 'blockquote' | 'pre' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

		interface InsertTableMaxSizeOptions {
			col: number;
			row: number;
		}

		interface IconsOptions {
			options?: any; // todo
		}

		interface KeyMapOptions {
			pc?: KeyMapPcOptions;
			mac?: KeyMapMacOptions;
		}

		interface KeyMapPcOptions {
			options?: any; // todo
		}

		interface KeyMapMacOptions {
			options?: any; // todo
		}

		type htmlElement = string;

		interface HintOptions {
			words?: string[];
			mentions?: string[];
			match: RegExp;
			search: (keyword: string, callback: (plausibleItems: string[]) => void) => void;
			template?: (item: string) => htmlElement;
			content?: (item: string) => htmlElement | JQuery.Node;
		}

		interface CodemirrorOptions {
			mode?: string;
			htmlNode?: boolean;
			lineNumbers?: boolean;
			theme?: string;
		}

		type popoverImageOptionsImagesize = 'imageSize100' | 'imageSize50' | 'imageSize25';
		type popoverImageOptionsFloat = 'floatLeft' | 'floatRight' | 'floatNone';
		type popoverImageOptionsRemove = 'removeMedia';
		type popoverImageDef = [
			['imagesize', popoverImageOptionsImagesize[]],
			['float', popoverImageOptionsFloat[]],
			['remove', popoverImageOptionsRemove[]]
		];

		type popoverLinkLinkOptions = 'linkDialogShow' | 'unlink';
		type popoverLinkDef = [
			['link', popoverLinkLinkOptions[]]
		];

		type popoverAirOptionsColor = 'color';
		type popoverAirOptionsFont = 'bold' | 'underline' | 'clear';
		type popoverAirOptionsPara = 'ul' | 'paragraph';
		type popoverAirOptionsTable = 'table';
		type popoverAirOptionsInsert = 'link' | 'picture';
		type popoverAirDef = [
			['color', popoverAirOptionsColor],
			['font', popoverAirOptionsFont],
			['para', popoverAirOptionsPara],
			['table', popoverAirOptionsTable],
			['insert', popoverAirOptionsInsert]
		];

		interface PopoverOptions {
			image?: popoverImageDef;
			link?: popoverLinkDef;
			air?: popoverAirDef;
		}

		interface ModuleOptions {
			options?: any; // todo
		}

		interface CreateLinkOptions {
			text: string;
			url: string;
			newWindow: boolean;
		}

		type EditImageCallback = ($image: JQuery.Node) => void;
	}

	interface JQuery {
		summernote(): JQuery;
		summernote(command: string): JQuery;
		summernote(options?: Summernote.Options): JQuery;
		summernote(command: string, markupString: string): JQuery;
		summernote(command: string, value: number): JQuery;
		summernote(command: string, node: JQuery.Node): JQuery;
		summernote(command: string, url: string, filename?: (string | Summernote.EditImageCallback)): JQuery;

		summernote(command: 'destroy'): JQuery;
		summernote(command: 'code', markupStr?: string): JQuery;
		summernote(command: 'editor.pasteHTML' | 'pasteHTML', markup: string): JQuery;

		// Basic API
		summernote(command: 'editor.createRange' | 'createRange'): JQuery;
		summernote(command: 'editor.saveRange' | 'saveRange'): JQuery;
		summernote(command: 'editor.restoreRange' | 'restoreRange'): JQuery;
		summernote(command: 'editor.undo' | 'undo'): JQuery;
		summernote(command: 'editor.redo' | 'redo'): JQuery;
		summernote(command: 'editor.focus' | 'focus'): JQuery;
		summernote(command: 'editor.isEmpty' | 'isEmpty'): boolean;
		summernote(command: 'reset'): JQuery;
		summernote(command: 'disable'): JQuery;
		summernote(command: 'enable'): JQuery;
		// Font style API
		summernote(fontStyle: 'editor.bold' | 'bold'): JQuery;
		summernote(fontStyle: 'editor.italic' | 'italic'): JQuery;
		summernote(fontStyle: 'editor.underline' | 'underline'): JQuery;
		summernote(fontStyle: 'editor.strikethrough' | 'strikethrough'): JQuery;
		summernote(command: 'editor.superscript' | 'superscript'): JQuery;
		summernote(command: 'editor.subscript' | 'subscript'): JQuery;
		summernote(command: 'editor.removeFormat' | 'removeFormat'): JQuery;
		summernote(command: 'backColor', color: string): JQuery;
		summernote(command: 'foreColor', color: string): JQuery;
		summernote(command: 'fontName', fontName: string): JQuery;
		summernote(command: 'editor.fontSize' | 'fontSize', fontSize: number): JQuery;
		// Paragraph API
		summernote(command: 'editor.justifyLeft' | 'justifyLeft'): JQuery;
		summernote(command: 'editor.justifyRight' | 'justifyRight'): JQuery;
		summernote(command: 'editor.justifyCenter' | 'justifyCenter'): JQuery;
		summernote(command: 'editor.justifyFull' | 'justifyFull'): JQuery;
		summernote(command: 'insertParagraph'): JQuery;
		summernote(command: 'editor.insertOrderedList' | 'insertOrderedList'): JQuery;
		summernote(command: 'editor.insertUnorderedList' | 'insertUnorderedList'): JQuery;
		summernote(command: 'editor.indent' | 'indent'): JQuery;
		summernote(command: 'editor.outdent' | 'outdent'): JQuery;
		summernote(command: 'formatPara'): JQuery;
		summernote(command: 'formatH1'): JQuery;
		summernote(command: 'formatH2'): JQuery;
		summernote(command: 'formatH3'): JQuery;
			summernote(command: 'formatH4'): JQuery;
		summernote(command: 'formatH5'): JQuery;
		summernote(command: 'formatH6'): JQuery;
		// Insertion API
		summernote(command: 'editor.insertImage' | 'insertImage', url: string, filename?: (string | Summernote.EditImageCallback)): JQuery;
		summernote(command: 'editor.insertNode' | 'insertNode', node: JQuery.Node): JQuery;
		summernote(command: 'editor.insertText' | 'insertText', text: string): JQuery;
		summernote(command: 'createLink', options: Summernote.CreateLinkOptions): JQuery;
		// TODO: Callbacks

		// TODO: Editor
		// editor.insertImagesOrCallback ??
		// editor.afterCommand ??
		// editor.resizeTo ??
		// editor.resize ??
		// editor.saveTarget ??
		// editor.isActivated ??
		// editor.formatBlock ??
		// editor.color ??
		// editor.lineHeight ??
		// editor.insertTable ??
		// editor.insertHorizontalRule ??
		// editor.floatMe ??
		// editor.removeMedia ??
		// editor.currentStyle ??
		// editor.getLinkInfo ??
		// editor.getSelectedText ??
	}
}

export {};
